/**
 * Simple in-memory sliding window rate limiter for Next.js API routes.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipRequestMap = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRequestMap.entries()) {
      const validTimestamps = record.timestamps.filter((ts) => now - ts < 60_000);
      if (validTimestamps.length === 0) {
        ipRequestMap.delete(ip);
      } else {
        record.timestamps = validTimestamps;
      }
    }
  }, 5 * 60_000);
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
}

export function checkRateLimit(
  identifier: string,
  limit: number = 20,
  windowMs: number = 60_000
): RateLimitResult {
  const now = Date.now();
  const record = ipRequestMap.get(identifier) || { timestamps: [] };

  // Remove timestamps outside window
  const windowStart = now - windowMs;
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= limit) {
    const oldestTimestamp = record.timestamps[0];
    const resetSeconds = Math.ceil((oldestTimestamp + windowMs - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetSeconds: Math.max(resetSeconds, 1),
    };
  }

  record.timestamps.push(now);
  ipRequestMap.set(identifier, record);

  return {
    allowed: true,
    remaining: limit - record.timestamps.length,
    resetSeconds: Math.ceil(windowMs / 1000),
  };
}
