export const AppMixin = {
    methods: {
        /**
         * Returns true if in production mode else false
         *
         * Used to turn on features in development that
         * is not be available in production
         */
        isProduction(): boolean {
            return process.env.NODE_ENV === "production";
        },

        /**
         * Returns the current year as a 4 digit number of format
         * YYYY
         */
        currentYear(): number {
            const now = new Date();
            return now.getFullYear();
        },

        /**
         * A sleep function, waits for as many milliseconds as is input
         * @param ms how long the function will sleep for, in milliseconds
         */
        async sleep(ms: number) {
            const seconds = ms * 1000;
            return await new Promise(resolve => setTimeout(resolve, seconds));
        }
    }
};
