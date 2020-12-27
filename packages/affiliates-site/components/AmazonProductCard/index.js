const AmazonProductCard = ({ url }) => (
  <div>
    <iframe
      width="100%"
      height="315"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      src={url}
      // src="https://amzn.to/3plxYyU"
      // src="https://ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kbtechspace02-21&marketplace=amazon&region=IN&placement=B08DDZLCQF&asins=B08DDZLCQF&linkId=a5bf40b2180b445ddd1c29118394217e&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
    ></iframe>
  </div>
);

export default AmazonProductCard;
