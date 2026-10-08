import { NextResponse } from 'next/server';

/**
 * Unified API Response Type
 * 
 * All API endpoints should return this format for consistency.
 */
export type ApiResponse<T = unknown> = {
    success: boolean;
    data?: T;
    error?: string;
    code?: string;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
};

/**
 * Create a success response
 */
export function successResponse<T>(data: T, status = 200): NextResponse {
    return NextResponse.json({ success: true, data }, { status });
}

/**
 * Create an error response
 */
export function errorResponse(
    error: string,
    code: string,
    status = 400
): NextResponse {
    return NextResponse.json({ success: false, error, code }, { status });
}

/**
 * Create a paginated response
 */
export function paginatedResponse<T>(
    data: T[],
    page: number,
    limit: number,
    total: number
): NextResponse {
    return NextResponse.json({
        success: true,
        data,
        meta: { page, limit, total },
    });
}

// Standard Error Codes
export const ErrorCodes = {
    // Authentication
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    SESSION_EXPIRED: 'SESSION_EXPIRED',

    // Validation
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    INVALID_INPUT: 'INVALID_INPUT',
    MISSING_FIELD: 'MISSING_FIELD',

    // Resources
    NOT_FOUND: 'NOT_FOUND',
    ALREADY_EXISTS: 'ALREADY_EXISTS',
    CONFLICT: 'CONFLICT',

    // Rate Limiting
    RATE_LIMITED: 'RATE_LIMITED',

    // Server
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',

    // Business Logic
    INSUFFICIENT_CREDITS: 'INSUFFICIENT_CREDITS',
    QUOTA_EXCEEDED: 'QUOTA_EXCEEDED',
    FEATURE_DISABLED: 'FEATURE_DISABLED',
} as const;

// Example Usage:
/*
// Success
return successResponse({ user: { id: 1, name: 'John' } });

// Error
return errorResponse('User not found', ErrorCodes.NOT_FOUND, 404);

// Paginated
return paginatedResponse(users, 1, 10, 100);
*/
