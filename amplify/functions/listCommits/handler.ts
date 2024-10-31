import type { Handler } from "aws-lambda";

export const handler: Handler = async () => {
  return {commits: [{author: 'test', message: 'still a test'}]};
};