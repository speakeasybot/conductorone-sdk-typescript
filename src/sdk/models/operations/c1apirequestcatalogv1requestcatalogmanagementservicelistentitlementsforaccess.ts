/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=catalog_id" })
    catalogId: string;
}

export class C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     *  The RequestCatalogManagementServiceListEntitlementsForAccessResponse message contains a list of results and a nextPageToken if applicable.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    requestCatalogManagementServiceListEntitlementsForAccessResponse?: shared.RequestCatalogManagementServiceListEntitlementsForAccessResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
