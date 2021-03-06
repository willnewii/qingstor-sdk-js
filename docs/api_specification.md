<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Bucket][1]
    -   [Parameters][2]
    -   [delete][3]
    -   [deleteCORS][4]
    -   [deleteExternalMirror][5]
    -   [deleteLifecycle][6]
    -   [deleteNotification][7]
    -   [deletePolicy][8]
    -   [deleteMultipleObjects][9]
        -   [Parameters][10]
    -   [getACL][11]
    -   [getCORS][12]
    -   [getExternalMirror][13]
    -   [getLifecycle][14]
    -   [getNotification][15]
    -   [getPolicy][16]
    -   [getStatistics][17]
    -   [head][18]
    -   [listMultipartUploads][19]
        -   [Parameters][20]
    -   [listObjects][21]
        -   [Parameters][22]
    -   [put][23]
    -   [putACL][24]
        -   [Parameters][25]
    -   [putCORS][26]
        -   [Parameters][27]
    -   [putExternalMirror][28]
        -   [Parameters][29]
    -   [putLifecycle][30]
        -   [Parameters][31]
    -   [putNotification][32]
        -   [Parameters][33]
    -   [putPolicy][34]
        -   [Parameters][35]
    -   [abortMultipartUpload][36]
        -   [Parameters][37]
    -   [completeMultipartUpload][38]
        -   [Parameters][39]
    -   [deleteObject][40]
        -   [Parameters][41]
    -   [getObject][42]
        -   [Parameters][43]
    -   [headObject][44]
        -   [Parameters][45]
    -   [imageProcess][46]
        -   [Parameters][47]
    -   [initiateMultipartUpload][48]
        -   [Parameters][49]
    -   [listMultipart][50]
        -   [Parameters][51]
    -   [optionsObject][52]
        -   [Parameters][53]
    -   [putObject][54]
        -   [Parameters][55]
    -   [uploadMultipart][56]
        -   [Parameters][57]
-   [QingStor][58]
    -   [Parameters][59]
    -   [listBuckets][60]
        -   [Parameters][61]

## Bucket

Bucket Module

### Parameters

-   `config` **[Object][62]** object
-   `properties` **[Object][62]** 

### delete

Delete a bucket. [Documentation URL][63]

Returns **[Promise][64]** axios response

### deleteCORS

Delete CORS information of the bucket. [Documentation URL][65]

Returns **[Promise][64]** axios response

### deleteExternalMirror

Delete external mirror of the bucket. [Documentation URL][66]

Returns **[Promise][64]** axios response

### deleteLifecycle

Delete Lifecycle information of the bucket. [Documentation URL][67]

Returns **[Promise][64]** axios response

### deleteNotification

Delete Notification information of the bucket. [Documentation URL][68]

Returns **[Promise][64]** axios response

### deletePolicy

Delete policy information of the bucket. [Documentation URL][69]

Returns **[Promise][64]** axios response

### deleteMultipleObjects

Delete multiple objects from the bucket. [Documentation URL][70]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.Content-MD5`  Object MD5sum
    -   `options.objects`  A list of keys to delete
    -   `options.quiet`  Whether to return the list of deleted objects

Returns **[Promise][64]** axios response

### getACL

Get ACL information of the bucket. [Documentation URL][71]

Returns **[Promise][64]** axios response

### getCORS

Get CORS information of the bucket. [Documentation URL][72]

Returns **[Promise][64]** axios response

### getExternalMirror

Get external mirror of the bucket. [Documentation URL][73]

Returns **[Promise][64]** axios response

### getLifecycle

Get Lifecycle information of the bucket. [Documentation URL][74]

Returns **[Promise][64]** axios response

### getNotification

Get Notification information of the bucket. [Documentation URL][75]

Returns **[Promise][64]** axios response

### getPolicy

Get policy information of the bucket. [Documentation URL][76]

Returns **[Promise][64]** axios response

### getStatistics

Get statistics information of the bucket. [Documentation URL][77]

Returns **[Promise][64]** axios response

### head

Check whether the bucket exists and available. [Documentation URL][78]

Returns **[Promise][64]** axios response

### listMultipartUploads

List multipart uploads in the bucket. [Documentation URL][79]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.delimiter`  Put all keys that share a common prefix into a list
    -   `options.key_marker`  Limit results returned from the first key after key_marker sorted by alphabetical order
    -   `options.limit`  Results count limit
    -   `options.prefix`  Limits results to keys that begin with the prefix
    -   `options.upload_id_marker`  Limit results returned from the first uploading segment after upload_id_marker sorted by the time of upload_id

Returns **[Promise][64]** axios response

### listObjects

Retrieve the object list in a bucket. [Documentation URL][80]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.delimiter`  Put all keys that share a common prefix into a list
    -   `options.limit`  Results count limit
    -   `options.marker`  Limit results to keys that start at this marker
    -   `options.prefix`  Limits results to keys that begin with the prefix

Returns **[Promise][64]** axios response

### put

Create a new bucket. [Documentation URL][81]

Returns **[Promise][64]** axios response

### putACL

Set ACL information of the bucket. [Documentation URL][82]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.acl`  Bucket ACL rules

Returns **[Promise][64]** axios response

### putCORS

Set CORS information of the bucket. [Documentation URL][83]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.cors_rules`  Bucket CORS rules

Returns **[Promise][64]** axios response

### putExternalMirror

Set external mirror of the bucket. [Documentation URL][84]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.source_site`  Source site url

Returns **[Promise][64]** axios response

### putLifecycle

Set Lifecycle information of the bucket. [Documentation URL][85]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.rule`  Bucket Lifecycle rule

Returns **[Promise][64]** axios response

### putNotification

Set Notification information of the bucket. [Documentation URL][86]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.notifications`  Bucket Notification

Returns **[Promise][64]** axios response

### putPolicy

Set policy information of the bucket. [Documentation URL][87]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.statement`  Bucket policy statement

Returns **[Promise][64]** axios response

### abortMultipartUpload

Abort multipart upload. [Documentation URL][88]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.upload_id`  Object multipart upload ID

Returns **[Promise][64]** axios response

### completeMultipartUpload

Complete multipart upload. [Documentation URL][90]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.ETag`  MD5sum of the object part
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.upload_id`  Object multipart upload ID
    -   `options.object_parts`  Object parts

Returns **[Promise][64]** axios response

### deleteObject

Delete the object. [Documentation URL][91]

#### Parameters

-   `object_key` **[string][89]** The object key

Returns **[Promise][64]** axios response

### getObject

Retrieve the object. [Documentation URL][92]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.If-Match`  Check whether the ETag matches
    -   `options.If-Modified-Since`  Check whether the object has been modified
    -   `options.If-None-Match`  Check whether the ETag does not match
    -   `options.If-Unmodified-Since`  Check whether the object has not been modified
    -   `options.Range`  Specified range of the object
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.response-cache-control`  Specified the Cache-Control response header
    -   `options.response-content-disposition`  Specified the Content-Disposition response header
    -   `options.response-content-encoding`  Specified the Content-Encoding response header
    -   `options.response-content-language`  Specified the Content-Language response header
    -   `options.response-content-type`  Specified the Content-Type response header
    -   `options.response-expires`  Specified the Expires response header

Returns **[Promise][64]** axios response

### headObject

Check whether the object exists and available. [Documentation URL][93]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.If-Match`  Check whether the ETag matches
    -   `options.If-Modified-Since`  Check whether the object has been modified
    -   `options.If-None-Match`  Check whether the ETag does not match
    -   `options.If-Unmodified-Since`  Check whether the object has not been modified
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key

Returns **[Promise][64]** axios response

### imageProcess

Image process with the action on the object [Documentation URL][94]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.If-Modified-Since`  Check whether the object has been modified
    -   `options.action`  Image process action
    -   `options.response-cache-control`  Specified the Cache-Control response header
    -   `options.response-content-disposition`  Specified the Content-Disposition response header
    -   `options.response-content-encoding`  Specified the Content-Encoding response header
    -   `options.response-content-language`  Specified the Content-Language response header
    -   `options.response-content-type`  Specified the Content-Type response header
    -   `options.response-expires`  Specified the Expires response header

Returns **[Promise][64]** axios response

### initiateMultipartUpload

Initial multipart upload on the object. [Documentation URL][95]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.Content-Type`  Object content type
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.X-QS-MetaData`  User-defined metadata
    -   `options.X-QS-Storage-Class`  Specify the storage class for object

Returns **[Promise][64]** axios response

### listMultipart

List object parts. [Documentation URL][96]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.limit`  Limit results count
    -   `options.part_number_marker`  Object multipart upload part number
    -   `options.upload_id`  Object multipart upload ID

Returns **[Promise][64]** axios response

### optionsObject

Check whether the object accepts a origin with method and header. [Documentation URL][97]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.Access-Control-Request-Headers`  Request headers
    -   `options.Access-Control-Request-Method`  Request method
    -   `options.Origin`  Request origin

Returns **[Promise][64]** axios response

### putObject

Upload the object. [Documentation URL][98]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.Cache-Control`  Object cache control
    -   `options.Content-Encoding`  Object content encoding
    -   `options.Content-Length`  Object content size
    -   `options.Content-MD5`  Object MD5sum
    -   `options.Content-Type`  Object content type
    -   `options.Expect`  Used to indicate that particular server behaviors are required by the client
    -   `options.X-QS-Copy-Source`  Copy source, format (/<bucket-name>/<object-key>)
    -   `options.X-QS-Copy-Source-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Copy-Source-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Copy-Source-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.X-QS-Copy-Source-If-Match`  Check whether the copy source matches
    -   `options.X-QS-Copy-Source-If-Modified-Since`  Check whether the copy source has been modified
    -   `options.X-QS-Copy-Source-If-None-Match`  Check whether the copy source does not match
    -   `options.X-QS-Copy-Source-If-Unmodified-Since`  Check whether the copy source has not been modified
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.X-QS-Fetch-If-Unmodified-Since`  Check whether fetch target object has not been modified
    -   `options.X-QS-Fetch-Source`  Fetch source, should be a valid url
    -   `options.X-QS-MetaData`  User-defined metadata
    -   `options.X-QS-Move-Source`  Move source, format (/<bucket-name>/<object-key>)
    -   `options.X-QS-Storage-Class`  Specify the storage class for object

Returns **[Promise][64]** axios response

### uploadMultipart

Upload object multipart. [Documentation URL][99]

#### Parameters

-   `object_key` **[string][89]** The object key
-   `options` **[Object][62]** User input options;
    -   `options.Content-Length`  Object multipart content length
    -   `options.Content-MD5`  Object multipart content MD5sum
    -   `options.X-QS-Copy-Range`  Specify range of the source object
    -   `options.X-QS-Copy-Source`  Copy source, format (/<bucket-name>/<object-key>)
    -   `options.X-QS-Copy-Source-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Copy-Source-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Copy-Source-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.X-QS-Copy-Source-If-Match`  Check whether the Etag of copy source matches the specified value
    -   `options.X-QS-Copy-Source-If-Modified-Since`  Check whether the copy source has been modified since the specified date
    -   `options.X-QS-Copy-Source-If-None-Match`  Check whether the Etag of copy source does not matches the specified value
    -   `options.X-QS-Copy-Source-If-Unmodified-Since`  Check whether the copy source has not been unmodified since the specified date
    -   `options.X-QS-Encryption-Customer-Algorithm`  Encryption algorithm of the object
    -   `options.X-QS-Encryption-Customer-Key`  Encryption key of the object
    -   `options.X-QS-Encryption-Customer-Key-MD5`  MD5sum of encryption key
    -   `options.part_number`  Object multipart upload part number
    -   `options.upload_id`  Object multipart upload ID

Returns **[Promise][64]** axios response

## QingStor

QingStor Module

### Parameters

-   `config` **[Object][62]** object

### listBuckets

Retrieve the bucket list. [Documentation URL][100]

#### Parameters

-   `options` **[Object][62]** User input options;
    -   `options.Location`  Limits results to buckets that in the location

Returns **[Promise][64]** axios response

[1]: #bucket

[2]: #parameters

[3]: #delete

[4]: #deletecors

[5]: #deleteexternalmirror

[6]: #deletelifecycle

[7]: #deletenotification

[8]: #deletepolicy

[9]: #deletemultipleobjects

[10]: #parameters-1

[11]: #getacl

[12]: #getcors

[13]: #getexternalmirror

[14]: #getlifecycle

[15]: #getnotification

[16]: #getpolicy

[17]: #getstatistics

[18]: #head

[19]: #listmultipartuploads

[20]: #parameters-2

[21]: #listobjects

[22]: #parameters-3

[23]: #put

[24]: #putacl

[25]: #parameters-4

[26]: #putcors

[27]: #parameters-5

[28]: #putexternalmirror

[29]: #parameters-6

[30]: #putlifecycle

[31]: #parameters-7

[32]: #putnotification

[33]: #parameters-8

[34]: #putpolicy

[35]: #parameters-9

[36]: #abortmultipartupload

[37]: #parameters-10

[38]: #completemultipartupload

[39]: #parameters-11

[40]: #deleteobject

[41]: #parameters-12

[42]: #getobject

[43]: #parameters-13

[44]: #headobject

[45]: #parameters-14

[46]: #imageprocess

[47]: #parameters-15

[48]: #initiatemultipartupload

[49]: #parameters-16

[50]: #listmultipart

[51]: #parameters-17

[52]: #optionsobject

[53]: #parameters-18

[54]: #putobject

[55]: #parameters-19

[56]: #uploadmultipart

[57]: #parameters-20

[58]: #qingstor

[59]: #parameters-21

[60]: #listbuckets

[61]: #parameters-22

[62]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[63]: https://docs.qingcloud.com/qingstor/api/bucket/delete.html

[64]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[65]: https://docs.qingcloud.com/qingstor/api/bucket/cors/delete_cors.html

[66]: https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/delete_external_mirror.html

[67]: https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/delete_lifecycle.html

[68]: https://docs.qingcloud.com/qingstor/api/bucket/notification/delete_notification.html

[69]: https://docs.qingcloud.com/qingstor/api/bucket/policy/delete_policy.html

[70]: https://docs.qingcloud.com/qingstor/api/bucket/delete_multiple.html

[71]: https://docs.qingcloud.com/qingstor/api/bucket/get_acl.html

[72]: https://docs.qingcloud.com/qingstor/api/bucket/cors/get_cors.html

[73]: https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/get_external_mirror.html

[74]: https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/get_lifecycle.html

[75]: https://docs.qingcloud.com/qingstor/api/bucket/notification/get_notification.html

[76]: https://https://docs.qingcloud.com/qingstor/api/bucket/policy/get_policy.html

[77]: https://docs.qingcloud.com/qingstor/api/bucket/get_stats.html

[78]: https://docs.qingcloud.com/qingstor/api/bucket/head.html

[79]: https://docs.qingcloud.com/qingstor/api/bucket/list_multipart_uploads.html

[80]: https://docs.qingcloud.com/qingstor/api/bucket/get.html

[81]: https://docs.qingcloud.com/qingstor/api/bucket/put.html

[82]: https://docs.qingcloud.com/qingstor/api/bucket/put_acl.html

[83]: https://docs.qingcloud.com/qingstor/api/bucket/cors/put_cors.html

[84]: https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/put_external_mirror.html

[85]: https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/put_lifecycle.html

[86]: https://docs.qingcloud.com/qingstor/api/bucket/notification/put_notification.html

[87]: https://docs.qingcloud.com/qingstor/api/bucket/policy/put_policy.html

[88]: https://docs.qingcloud.com/qingstor/api/object/abort_multipart_upload.html

[89]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[90]: https://docs.qingcloud.com/qingstor/api/object/complete_multipart_upload.html

[91]: https://docs.qingcloud.com/qingstor/api/object/delete.html

[92]: https://docs.qingcloud.com/qingstor/api/object/get.html

[93]: https://docs.qingcloud.com/qingstor/api/object/head.html

[94]: https://docs.qingcloud.com/qingstor/data_process/image_process/index.html

[95]: https://docs.qingcloud.com/qingstor/api/object/initiate_multipart_upload.html

[96]: https://docs.qingcloud.com/qingstor/api/object/list_multipart.html

[97]: https://docs.qingcloud.com/qingstor/api/object/options.html

[98]: https://docs.qingcloud.com/qingstor/api/object/put.html

[99]: https://docs.qingcloud.com/qingstor/api/object/multipart/upload_multipart.html

[100]: https://docs.qingcloud.com/qingstor/api/service/get.html
