/*
  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify,
  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import IoT from '@/components/IoT';

import moment from 'moment';
Vue.prototype.moment = moment;

// Import the plugin here
import { Auth0Plugin } from './auth';

//require('dotenv').config();

const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;
const clientId = process.env.AUTH0_CLIENT_ID;
const googleMapsKey = process.env.GOOGLE_MAPS_KEY;
const apiUrl = process.env.API_URL;
const cognitoIdentityPoolId = process.env.COGNITO_IDENTITY_POOL_ID;
const iotEndpoint = process.env.IOT_ENDPOINT;
const region = process.env.REGION;

// Realtime websocket notifications
Vue.component('iot', IoT);

/* ===================================================
                      CONFIGURATION
    You must add your own values here! See the tutorial
    in the GitHub repo for more information. @jbesw
   =================================================== */

Vue.config.productionTip = false;
Vue.prototype.$appName = 'Ask Around Me';
// Google Maps key - see https://developers.google.com/maps/documentation/javascript/get-api-key
Vue.prototype.$GoogleMapsKey = googleMapsKey;

// API Gateway endpoint - e.g. https://abc123abc.execute-api.us-east-1.amazonaws.com
Vue.prototype.$APIurl = apiUrl;

// ** Websocket connection **

//  PoolId: Retrieve this with the CLI command: aws cognito-identity list-identity-pools --max-results 10
(Vue.prototype.$poolId = cognitoIdentityPoolId), // 'YourCognitoIdentityPoolId'
  //  IoTendpoint: Retrieve this with the CLI command: aws iot describe-endpoint --endpoint-type iot:Data-ATS
  (Vue.prototype.$host = iotEndpoint), // 'YourAwsIoTEndpoint', e.g. 'prefix.iot.us-east-1.amazonaws.com'
  //  This is the region you selected in the SAM template deployment.
  (Vue.prototype.$region = region); // Your region

/* ===================================================
                    END CONFIGURATION
   =================================================== */

Vue.use(VueGoogleMaps, {
  load: {
    key: Vue.prototype.$GoogleMapsKey,
    libraries: 'places',
  },
  installComponents: true,
});

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
  },
});

export const bus = new Vue();

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
