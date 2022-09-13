import config from "config";
import { createHmac } from "crypto";

export const timestamp = Math.floor(Date.now() / 1000);

export const generateSignature = (http_method: string, req_path: string) => {
  const api_secret = config.get<string>("API_SECRET");
  const signature_payload = `${timestamp}${http_method}${req_path}`;

  const ftxSignature = createHmac("sha256", api_secret).digest("hex");
  return ftxSignature;
};
