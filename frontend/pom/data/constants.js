import dotenv from 'dotenv'

dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.TODOIST_URL
}

export const CREDENTIALS = {
    ACCEPTED_CREDENTIALS: {
        EMAIL_USER: process.env.EMAIL_USER,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_CREDENTIALS: {
        INVALID_EMAIL: 'test@test',
        INVALID_PASSWORD: '123456'
    }

}

export const ALERT_MESSAGES = {
    ERROR_MESSAGES: {
        LOGIN_PAGE: {
            INVALID_EMAIL: 'Invalid email address.',
            WRONG_USER_PASSWORD: 'Wrong email or password.',
            PASSWORD_REQUIRED: 'Blank password.'
        }
    }
}

export const WAIT_TIME = {
    TWO_SECONDS: 1000 * 2
};

export const TASK_DATA = {
    TODAY: {
        TITLE: 'Feed the cat',
        DESCRIPTION: 'Feed the cat with Whiskas'
    },
    TOMORROW: {
        TITLE: 'Feed the dog',
        DESCRIPTION: 'Feed the dog with Purina'
    }
}

export const PROJECT_DATA = {
    NAME: 'Bootcamp Wizeline'

}
