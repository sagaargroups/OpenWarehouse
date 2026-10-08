'use client';

import { Button } from '@/components/ui/button';
import { Loader2, Check } from 'lucide-react';
import { useState } from 'react';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';

interface ActionButtonProps {
    onClick: () => Promise<void>;
    children: React.ReactNode;
    loadingText?: string;
    successText?: string;
    variant?: 'default' | 'outline' | 'destructive';
    className?: string;
}

/**
 * Button with proper loading, success, and error states.
 * 
 * Usage:
 * <ActionButton onClick={handleSubmit} loadingText="Saving...">
 *   Save Changes
 * </ActionButton>
 */
export function ActionButton({
    onClick,
    children,
    loadingText = 'Processing...',
    successText = 'Done!',
    variant = 'default',
    className,
}: ActionButtonProps) {
    const [state, setState] = useState<ButtonState>('idle');

    const handleClick = async () => {
        try {
            setState('loading');
            await onClick();
            setState('success');

            // Reset to idle after 2 seconds
            setTimeout(() => setState('idle'), 2000);
        } catch (error) {
            setState('error');

            // Reset to idle after 3 seconds
            setTimeout(() => setState('idle'), 3000);
        }
    };

    const isDisabled = state === 'loading' || state === 'success';

    return (
        <Button
            onClick={handleClick}
            disabled={isDisabled}
            variant={state === 'error' ? 'destructive' : variant}
            className={className}
        >
            {state === 'loading' && (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {loadingText}
                </>
            )}
            {state === 'success' && (
                <>
                    <Check className="mr-2 h-4 w-4" />
                    {successText}
                </>
            )}
            {state === 'error' && 'Error - Try Again'}
            {state === 'idle' && children}
        </Button>
    );
}

/*
This example demonstrates:
1. Loading spinner inside button
2. "Processing..." text during loading
3. Disabled state during loading
4. Success state with checkmark
5. Error state with retry option
6. Auto-reset to idle state
*/
