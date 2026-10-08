import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db/drizzle';
import { getUser } from '@/lib/db/queries';

// Request validation schema
const requestSchema = z.object({
    // Define your request body schema
});

// Response type
type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
    code?: string;
};

// Helper to create consistent responses
function createResponse<T>(
    data: ApiResponse<T>,
    status: number = 200
): NextResponse {
    return NextResponse.json(data, { status });
}

/**
 * GET /api/[route]
 * Description: What this endpoint does
 */
export async function GET(request: NextRequest) {
    try {
        // 1. Authenticate
        const user = await getUser();
        if (!user) {
            return createResponse(
                { success: false, error: 'Unauthorized', code: 'UNAUTHORIZED' },
                401
            );
        }

        // 2. Your logic here
        const data = {}; // Replace with your data fetching

        // 3. Return success response
        return createResponse({ success: true, data });

    } catch (error) {
        console.error('GET /api/[route] error:', error);
        return createResponse(
            { success: false, error: 'Internal server error', code: 'INTERNAL_ERROR' },
            500
        );
    }
}

/**
 * POST /api/[route]
 * Description: What this endpoint does
 */
export async function POST(request: NextRequest) {
    try {
        // 1. Authenticate
        const user = await getUser();
        if (!user) {
            return createResponse(
                { success: false, error: 'Unauthorized', code: 'UNAUTHORIZED' },
                401
            );
        }

        // 2. Parse and validate request body
        const body = await request.json();
        const validationResult = requestSchema.safeParse(body);

        if (!validationResult.success) {
            return createResponse(
                {
                    success: false,
                    error: 'Invalid request body',
                    code: 'VALIDATION_ERROR'
                },
                400
            );
        }

        const validatedData = validationResult.data;

        // 3. Your logic here
        const result = {}; // Replace with your business logic

        // 4. Return success response
        return createResponse({ success: true, data: result }, 201);

    } catch (error) {
        console.error('POST /api/[route] error:', error);
        return createResponse(
            { success: false, error: 'Internal server error', code: 'INTERNAL_ERROR' },
            500
        );
    }
}

/*
Template Usage:
1. Replace [route] with your route name
2. Define your request schema with Zod
3. Implement your business logic
4. Update response types

Best Practices Applied:
- Zod validation on all inputs
- Unified response format
- Proper HTTP status codes
- Error logging (not exposed to client)
- Authentication check first
*/
