import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props: any, ref: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  //useImperativeHandle dùng để chia sẻ một phần của object reference ( play và pause ) ra cho component cha sử dụng, thay vì chia sẻ toàn bộ object reference
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current?.play();
    },
    pause() {
      videoRef.current?.pause();
    },
  }));
  return (
    <video
      ref={videoRef}
      loop
      className="w-[400px]"
      src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/playback1.mp4"
    ></video>
  );
}

export default forwardRef(Video);
