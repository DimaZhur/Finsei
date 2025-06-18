// mint.config.js
module.exports = {
    name: "Finsei Developer Portal",
    theme: "venus",
    css: ["/css/custom.css"],
    favicon: "/favicon.ico",
    logo: {
        dark: "/logo/logo-dark.png",
        light: "/logo/logo-light.png"
    },
    colors: {
        primary: "#16A34A",
        light: "#07C983",
        dark: "#15803D"
    },
    navigation: [
        {
            group: "Introduction",
            pages: [
                "introduction/what-is-finsei",
                "introduction/who-is-this-for"
            ]
        },
        {
            group: "Core Concepts",
            pages: [
                "core-concepts/wallets",
                "core-concepts/cards",
                "core-concepts/transactions",
                "core-concepts/beneficiary"
            ]
        },
        {
            group: "Integration",
            pages: [
                "integration/get-sandbox-account",
                "integration/create-jwt-token",
                "integration/check-my-wallet",
                "integration/create-debit-to-ben",
                "integration/create-debit-another-finsei-wallet",
                "integration/status-for-payment",
                "integration/check-payment-status",
                "integration/create-credit-payment",
                "integration/see-wallet-payments",
                "integration/create-card",
                "integration/check-my-cards",
                "integration/get-payment-webhooks"
            ]
        },
        {
            group: "API Reference",
            pages: [
                "api-reference/base-url",
                "api-reference/changelog",
                "api-reference/endpoints"
            ]
        }
    ],
    root: "."
};