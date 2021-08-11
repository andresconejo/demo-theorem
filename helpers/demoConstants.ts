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
    public static readonly SEND_MESSAGE_ACK = 'Thanks for the message!!';
    public static readonly PRODUCT_ADDED = 'Product added';
    public static readonly PURCHASE_MESSAGE_ACK = 'Thank you for your purchase!';
}

export class BaseURL {
    public static readonly BASE_URL = 'https://www.demoblaze.com/';
}

export class ContactUsConstants {
    public static readonly VALID_EMAIL = 'test_email@test.com';
    public static readonly VALID_NAME = 'Rodolfo';
    public static readonly VALID_MESSAGE = 'Cool App';
}

export class PurchaseFormConstants {
    public static readonly NAME = 'Rodolfo Conejo';
    public static readonly COUNTRY = 'Costa Rica';
    public static readonly CITY = 'San Jose';
    public static readonly CARD = '4111111111111111';
    public static readonly MONTH = '10';
    public static readonly YEAR = '25';
}
