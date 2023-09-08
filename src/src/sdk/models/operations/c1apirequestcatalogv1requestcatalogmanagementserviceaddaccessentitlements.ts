/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestCatalogManagementServiceAddAccessEntitlementsRequest?: shared.RequestCatalogManagementServiceAddAccessEntitlementsRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=catalog_id" })
    catalogId: string;
}

export class C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Empty response with a status code indicating success.
     */
    @SpeakeasyMetadata()
    requestCatalogManagementServiceAddAccessEntitlementsResponse?: shared.RequestCatalogManagementServiceAddAccessEntitlementsResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
