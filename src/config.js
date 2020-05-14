export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-bts"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://1xr9awgez4.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_g8n0kbh5F",
      APP_CLIENT_ID: "8028p812oltheg5s4bhghk09u",
      IDENTITY_POOL_ID: "us-east-1:2c1b9aff-9c6e-4e8e-83be-10a6860c0400"
    },
    STRIPE_KEY: "pk_test_nND7smt7z4xwww9DMQOt7Ytw00svYaAOpW",
  };