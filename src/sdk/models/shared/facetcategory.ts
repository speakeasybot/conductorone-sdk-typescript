/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FacetRangeItem } from "./facetrangeitem";
import { FacetValueItem } from "./facetvalueitem";
import { Expose, Type } from "class-transformer";

/**
 *  The FacetCategory indicates a grouping of facets by type. For example, facets "OnePassword" and "Okta" would group under an "Apps" category.
 *
 * @remarks
 *
 *
 * This message contains a oneof named item. Only a single field of the following list may be set at a time:
 *   - value
 *   - range
 *
 */
export class FacetCategory extends SpeakeasyBase {
    /**
     *  The FacetRangeItem message.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "range" })
    @Type(() => FacetRangeItem)
    facetRangeItem?: FacetRangeItem;

    /**
     *  The FacetValueItem message.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    @Type(() => FacetValueItem)
    facetValueItem?: FacetValueItem;

    /**
     *  The display name of the category.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     *  An icon for the category.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iconUrl" })
    iconUrl?: string;

    /**
     *  The param that is being set when checking a facet in this category.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "param" })
    param?: string;
}
