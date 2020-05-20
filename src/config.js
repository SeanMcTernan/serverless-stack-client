const dev = {
  STRIPE_KEY: "pk_test_nND7smt7z4xwww9DMQOt7Ytw00svYaAOpW",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-tbkt3lld06o3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vauu0up9i2.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JjgGLTydc",
    APP_CLIENT_ID: "2vbcqftd7bhljjrq1tfnrrc981",
    IDENTITY_POOL_ID: "us-east-1:072e2777-9140-46c1-8c9a-1b76ae1f077e"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_nND7smt7z4xwww9DMQOt7Ytw00svYaAOpW",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-br6zm07fw73u"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://p9odo2aych.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gG5mrbF0G",
    APP_CLIENT_ID: "7rodenffmsdhfvde87ug1iluvf",
    IDENTITY_POOL_ID: "us-east-1:2384edb9-8bfa-485c-b439-92b80020bfe3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};


