// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
        name: 'loginViaAuth0'
    });

    const options = {
        method: 'POST',
        // url: Cypress.env('auth_url'),
        url: '/api/auth/login',
        body: {
            grant_type: 'password',
            username: Cypress.env('auth_username'),
            password: Cypress.env('auth_password'),
            audience: Cypress.env('auth_audience'),
            scope: 'openid profile email',
            client_id: Cypress.env('auth_client_id'),
            client_secret: Cypress.env('auth_client_secret'),
        },
    };
    cy.request(options);

    window.localStorage.setItem('auth0Cypress', JSON.stringify(Cypress.env('auth_username')))

    // cy.visit('/')
})

/// custom command to login as admin from https://blog.johnnyreilly.com/2018/07/09/cypress-and-auth0

const auth0 = require('auth0-js')

Cypress.Commands.add('loginAsAdmin', (overrides = {}) => {
    Cypress.log({
        name: 'loginAsAdminBySingleSignOn'
    });

    const webAuth = new auth0.WebAuth({
        // domain: Cypress.env('auth_domain'),
        domain: "dev-cnut0nsjbad2t1ey.us.auth0.com",
        clientID: "LdU5CwcQvGin8S8gu13UNcsFCk1pBBS4",
        // clientID: Cypress.env('auth_client_id'),

        responseType: 'token id_token'
    });

    webAuth.client.login(
        {
            realm: 'Username-Password-Authentication',
            username: "thedebate.auth0@gmail.com",
            // username: Cypress.env('auth_username'),
            password:  "Pioneer1177!?!?",
            // password: Cypress.env('auth_password'),
            audience: "http://dev-cnut0nsjbad2t1ey.us.auth0.com/api/v2/",
            // audience: Cypress.env('auth_audience'), // Get this from https://manage.auth0.com/#/apis and your api, use the identifier property
            scope: 'openid email profile',
        },
        (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                const token = {
                    accessToken: authResult.accessToken,
                    idToken: authResult.idToken,
                    expiresAt: authResult.expiresIn * 1000 + newDate().getTime()
                };

                window.sessionStorage.setItem(
                    'The-Debate:storage-token',
                    JSON.stringify(token)
                );
            } else {
                console.error('Problem logging into Auth0', err)
                throw err;
            }
        }
    )
})


Cypress.Commands.add('visitHome', (overrides = {}) => {
    cy.visit('http://localhost:3000', {
        onBeforeLoad: (win) => {
            win.sessionStorage.clear();
        }
    });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })