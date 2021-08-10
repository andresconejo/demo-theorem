export class LoginCredentials {
    public static readonly VALID_USERNAME = 'rconejo';
    public static readonly INVALID_USERNAME = 'rconejo123';
    public static readonly VALID_PASSWORD = 'Test123';
    public static readonly INVALID_PASSWORD = 'Test1234';
}

export class VerificationMessages {
    public static readonly WRONG_PASSWORD = 'Wrong password.';
    public static readonly SIGN_UP_SUCCESSFUL = 'Sign up successful.';
    public static readonly USER_DOES_NOT_EXIST = 'User does not exist.';
    public static readonly EMPTY_USERNAME_PASSWORD = 'Please fill out Username and Password.';
    public static readonly USER_ALREADY_EXISTS = 'This user already exist.';
}

export class BaseURL {
    public static readonly BASE_URL = 'https://www.demoblaze.com/';
}
