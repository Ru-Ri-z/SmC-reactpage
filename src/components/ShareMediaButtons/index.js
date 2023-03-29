import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

export default function ShareButtons({ item, setShare, url }) {
  return (
    <>
      <FacebookShareButton url={item?.pdfUrl ? item?.pdfUrl : url} quote={item?.title} onClick={() => setShare(false)}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton url={item?.pdfUrl ? item?.pdfUrl : url} title={item?.title} onClick={() => setShare(false)}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <WhatsappShareButton url={item?.pdfUrl ? item?.pdfUrl : url} title={item?.title} onClick={() => setShare(false)}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={item?.pdfUrl ? item?.pdfUrl : url} title={item?.title} onClick={() => setShare(false)}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
      <EmailShareButton url={item?.pdfUrl ? item?.pdfUrl : url} body={item?.title} onClick={() => setShare(false)}>
        <EmailIcon size={40} round />
      </EmailShareButton>
    </>
  )
}
