# Media Library

The media library lets you manage your images and videos and attach them to
various entities, such as [programs](./programs.md), [guides](./guides.md) and
[activities](./activities).

![Media library](../static/img/media-library.png)

## Optimisation

Images are cropped and compressed in the browser, before being uploaded to
[Supabase storage](https://supabase.com/docs/guides/storage). This means that
you may see various crops of the same original image in the media library.

:::note
An alternative approach would be to store the full image data and use an
image resizing service to resize images on-the-fly, which would enable even
greater levels of flexibility but comes with the cost of running, or paying for
such such a service.
:::
