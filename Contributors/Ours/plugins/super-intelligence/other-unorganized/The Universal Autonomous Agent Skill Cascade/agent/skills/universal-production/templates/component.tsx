'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface $ { ComponentName }Props {
    // Add props here
}

export function ${ ComponentName } ({ }: ${ ComponentName }Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAction = async () => {
        try {
            setLoading(true);
            setError(null);

            // Your action here

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                    {error}
                </div>
            )}

            <Button onClick={handleAction} disabled={loading}>
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                    </>
                ) : (
                    'Submit'
                )}
            </Button>
        </div>
    );
}

/*
Template Usage:
1. Replace ${ComponentName} with your component name
2. Add your props to the interface
3. Implement your action in handleAction
4. Customize the UI in the return statement

Best Practices Applied:
- Loading state with spinner inside button
- Error handling with user-friendly message
- Disabled button during loading
- Proper TypeScript types
*/
