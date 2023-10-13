/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The user expand mask is used to indicate which related objects should be expanded in the response.
 *
 * @remarks
 *  The supported paths are 'role_ids', 'manager_ids', 'delegated_user_id', 'directory_ids', and '*'.
 */
export class UserExpandMask extends SpeakeasyBase {
    /**
     * An array of paths to be expanded in the response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paths" })
    paths?: string[];
}
