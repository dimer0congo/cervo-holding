export type UserRole = 'admin' | 'client';

export interface UserMetadata {
    role?: UserRole;
    onboardingCompleted?: boolean;
}

declare global {
    interface CustomJwtSessionClaims {
        metadata: UserMetadata;
    }
}
