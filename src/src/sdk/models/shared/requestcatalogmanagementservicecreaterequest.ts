/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCatalogExpandMask } from "./requestcatalogexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * Create a request catalog.
 */
export class RequestCatalogManagementServiceCreateRequest extends SpeakeasyBase {
    /**
     * The RequestCatalogExpandMask includes the paths in the catalog view to expand in the return value of this call.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => RequestCatalogExpandMask)
    requestCatalogExpandMask?: RequestCatalogExpandMask;

    /**
     * The description of the new request catalog.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The display name of the new request catalog.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * Whether or not the new catalog should be created as published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "published" })
    published?: boolean;

    /**
     * Whether or not the new catalog is visible to everyone by default.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "visibleToEveryone" })
    visibleToEveryone?: boolean;
}
