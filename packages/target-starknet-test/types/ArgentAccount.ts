/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Contract,
  Overrides,
  AddTransactionResponse,
  Invocation,
  EstimateFeeResponse,
} from "starknet";
import type { BigNumberish } from "starknet/utils/number";
import type { BlockIdentifier } from "starknet/provider/utils";

export type CallArray = {
  to: BigNumberish;
  selector: BigNumberish;
  data_offset: BigNumberish;
  data_len: BigNumberish;
};
export interface ArgentAccount extends Contract {
  initialize(
    signer: BigNumberish,
    guardian: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  __execute__(
    call_array: CallArray[],
    calldata: BigNumberish[],
    nonce: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  upgrade(
    implementation: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  change_signer(
    new_signer: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  change_guardian(
    new_guardian: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  change_guardian_backup(
    new_guardian: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  trigger_escape_guardian(options?: Overrides): Promise<AddTransactionResponse>;
  trigger_escape_signer(options?: Overrides): Promise<AddTransactionResponse>;
  cancel_escape(options?: Overrides): Promise<AddTransactionResponse>;
  escape_guardian(
    new_guardian: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  escape_signer(
    new_signer: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  is_valid_signature(
    hash: BigNumberish,
    sig: BigNumberish[],
    options?: { blockIdentifier?: BlockIdentifier }
  ): Promise<[] & {}>;
  supportsInterface(
    interfaceId: BigNumberish,
    options?: { blockIdentifier?: BlockIdentifier }
  ): Promise<[BigNumberish] & { success: BigNumberish }>;
  get_nonce(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<[BigNumberish] & { nonce: BigNumberish }>;
  get_signer(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<[BigNumberish] & { signer: BigNumberish }>;
  get_guardian(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<[BigNumberish] & { guardian: BigNumberish }>;
  get_guardian_backup(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<[BigNumberish] & { guardian_backup: BigNumberish }>;
  get_escape(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<
    [BigNumberish, BigNumberish] & {
      active_at: BigNumberish;
      type: BigNumberish;
    }
  >;
  get_version(options?: {
    blockIdentifier?: BlockIdentifier;
  }): Promise<[BigNumberish] & { version: BigNumberish }>;
  functions: {
    initialize(
      signer: BigNumberish,
      guardian: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    __execute__(
      call_array: CallArray[],
      calldata: BigNumberish[],
      nonce: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    upgrade(
      implementation: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    change_signer(
      new_signer: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    change_guardian(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    change_guardian_backup(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    trigger_escape_guardian(
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    trigger_escape_signer(options?: Overrides): Promise<AddTransactionResponse>;
    cancel_escape(options?: Overrides): Promise<AddTransactionResponse>;
    escape_guardian(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    escape_signer(
      new_signer: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    is_valid_signature(
      hash: BigNumberish,
      sig: BigNumberish[],
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    supportsInterface(
      interfaceId: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[BigNumberish] & { success: BigNumberish }>;
    get_nonce(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { nonce: BigNumberish }>;
    get_signer(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { signer: BigNumberish }>;
    get_guardian(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { guardian: BigNumberish }>;
    get_guardian_backup(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { guardian_backup: BigNumberish }>;
    get_escape(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<
      [BigNumberish, BigNumberish] & {
        active_at: BigNumberish;
        type: BigNumberish;
      }
    >;
    get_version(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { version: BigNumberish }>;
  };
  callStatic: {
    initialize(
      signer: BigNumberish,
      guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    __execute__(
      call_array: CallArray[],
      calldata: BigNumberish[],
      nonce: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[BigNumberish[]] & { response: BigNumberish[] }>;
    upgrade(
      implementation: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    change_signer(
      new_signer: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    change_guardian(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    change_guardian_backup(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    trigger_escape_guardian(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[] & {}>;
    trigger_escape_signer(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[] & {}>;
    cancel_escape(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[] & {}>;
    escape_guardian(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    escape_signer(
      new_signer: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    is_valid_signature(
      hash: BigNumberish,
      sig: BigNumberish[],
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    supportsInterface(
      interfaceId: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[BigNumberish] & { success: BigNumberish }>;
    get_nonce(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { nonce: BigNumberish }>;
    get_signer(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { signer: BigNumberish }>;
    get_guardian(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { guardian: BigNumberish }>;
    get_guardian_backup(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { guardian_backup: BigNumberish }>;
    get_escape(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<
      [BigNumberish, BigNumberish] & {
        active_at: BigNumberish;
        type: BigNumberish;
      }
    >;
    get_version(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<[BigNumberish] & { version: BigNumberish }>;
  };
  populateTransaction: {
    initialize(
      signer: BigNumberish,
      guardian: BigNumberish,
      options?: Overrides
    ): Invocation;
    __execute__(
      call_array: CallArray[],
      calldata: BigNumberish[],
      nonce: BigNumberish,
      options?: Overrides
    ): Invocation;
    upgrade(implementation: BigNumberish, options?: Overrides): Invocation;
    change_signer(new_signer: BigNumberish, options?: Overrides): Invocation;
    change_guardian(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Invocation;
    change_guardian_backup(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Invocation;
    trigger_escape_guardian(options?: Overrides): Invocation;
    trigger_escape_signer(options?: Overrides): Invocation;
    cancel_escape(options?: Overrides): Invocation;
    escape_guardian(
      new_guardian: BigNumberish,
      options?: Overrides
    ): Invocation;
    escape_signer(new_signer: BigNumberish, options?: Overrides): Invocation;
    is_valid_signature(
      hash: BigNumberish,
      sig: BigNumberish[],
      options?: { blockIdentifier?: BlockIdentifier }
    ): Invocation;
    supportsInterface(
      interfaceId: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Invocation;
    get_nonce(options?: { blockIdentifier?: BlockIdentifier }): Invocation;
    get_signer(options?: { blockIdentifier?: BlockIdentifier }): Invocation;
    get_guardian(options?: { blockIdentifier?: BlockIdentifier }): Invocation;
    get_guardian_backup(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Invocation;
    get_escape(options?: { blockIdentifier?: BlockIdentifier }): Invocation;
    get_version(options?: { blockIdentifier?: BlockIdentifier }): Invocation;
  };
  estimateFee: {
    initialize(
      signer: BigNumberish,
      guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    __execute__(
      call_array: CallArray[],
      calldata: BigNumberish[],
      nonce: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    upgrade(
      implementation: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    change_signer(
      new_signer: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    change_guardian(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    change_guardian_backup(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    trigger_escape_guardian(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    trigger_escape_signer(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    cancel_escape(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    escape_guardian(
      new_guardian: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    escape_signer(
      new_signer: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    is_valid_signature(
      hash: BigNumberish,
      sig: BigNumberish[],
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    supportsInterface(
      interfaceId: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    get_nonce(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    get_signer(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    get_guardian(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    get_guardian_backup(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    get_escape(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
    get_version(options?: {
      blockIdentifier?: BlockIdentifier;
    }): Promise<EstimateFeeResponse>;
  };
}
