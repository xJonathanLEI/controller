import { Controller } from "utils/wallet";
import {
  Message,
  SignMessageResponse,
  SignMessageRequest,
} from "@cartridge/sdk";

export async function sign(
  controller: Controller,
  message: Message<SignMessageRequest>,
) {
  try {
    const {
      params: { typedData },
    } = message.payload as SignMessageRequest;
    const signed = await controller.signMessage(typedData);
    return {
      method: "sign-message",
      result: signed,
    };
  } catch (error) {
    return {
      method: "sign-message",
      error,
    };
  }
}
