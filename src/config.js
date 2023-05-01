export const AMPLIFY_CONFIG = {
  aws_cognito_region: process.env.REACT_APP_AMPLIFY_REGION,
  aws_user_pools_id: process.env.REACT_APP_AMPLIFY_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_AMPLIFY_APP_CLIENT_ID,
  aws_cognito_identity_pool_id: process.env.REACT_APP_AMPLIFY_IDENTITY_POOL_ID,
  API: {
    endpoints: [
      {
        name: "JavaAPI",
        endpoint: "http://ec2-44-211-246-137.compute-1.amazonaws.com/",
        custom_header: async () => {
          try {
            const session = await Auth.currentSession();
            return {
              // ContentType: "application/json",
              Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
            };
          } catch (error) {
            console.warn("JavaAPI", error);
            return { Authorization: "token" };
          }
        },
      },
   ]
}
};
