import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchVideos } from "./redux/reducers/videos/action-creators";

import Header from "./components/Header";
import RegisterVideo from "./components/RegisterVideo";
import VideoSingle from "./components/VideoSingle";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";

import * as S from "./styles";

function App({ opened, videoSingle, videos, fetchVideos }) {
  useState(() => {
    fetchVideos();
    // console.log(state);
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Main>
        {opened && <RegisterVideo />}
        {videoSingle && (
          <VideoSingle id={videoSingle} title={videos[videoSingle].title} />
        )}
        <VideoList />
      </S.Main>

      <Footer />
    </S.Container>
  );
}

const mapStateToProps = ({ ui, videos, videoSingle }) => ({
  ...ui,
  videos,
  videoSingle,
});

const mapDispatchToProps = { fetchVideos };

export default connect(mapStateToProps, mapDispatchToProps)(App);
