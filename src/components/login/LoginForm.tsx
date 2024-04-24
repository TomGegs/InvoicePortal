// LoginForm.tsx
import { cn } from '../ui/utils';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useAuth } from '../../firebase/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDemoLoading, setIsDemoLoading] = useState<boolean>(false);
    const { signIn } = useAuth();

    const navigateToAccount = useNavigate();

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        // Basic validation
        if (!username.trim() || !password.trim()) {
            alert('Username and password are required');
            return;
        }
        performSignIn(username, password);
    }

    async function performSignIn(username: string, password: string) {
        setIsLoading(true);
        try {
            await signIn(username, password);
            setTimeout(() => {
                navigateToAccount('/account');
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                alert('Failed to sign in:' + error);
            }, 1000);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleDemoLogin() {
        setIsDemoLoading(true);
        try {
            await performSignIn('demo@example.com', 'password');
            setTimeout(() => {
                navigateToAccount('/account');
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                alert('Failed to load demo portal:' + error);
            }, 1000);
        } finally {
            setIsDemoLoading(false);
        }
    }

    return (
        <>
            <div className="mx-auto flex flex-col gap-y-4 lg:w-[400px]">
                <div className="text-secondary text-sm">
                    Enter your details below to sign into your account
                </div>
                <div
                    className={cn('grid gap-6 text-black', className)}
                    {...props}
                >
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="Username">
                                    Username
                                </Label>
                                <Input
                                    id="Username"
                                    placeholder="username"
                                    type="username"
                                    autoCapitalize="none"
                                    disabled={isLoading}
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="text-white"
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="text-white"
                                />
                            </div>
                            <div className="flex w-full flex-row gap-x-2">
                                <Button
                                    disabled={isLoading || isDemoLoading}
                                    className="w-[60%]"
                                >
                                    {isLoading ? (
                                        <div className="mr-2">Loading...</div>
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                                <Button
                                    onClick={handleDemoLogin}
                                    disabled={isLoading || isDemoLoading}
                                    className="w-[40%]"
                                >
                                    {isDemoLoading ? (
                                        <div className="mr-2">
                                            Loading Demo...
                                        </div>
                                    ) : (
                                        'Demo Portal'
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
