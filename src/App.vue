<template>
  <div>
    <com-header class="myheader"></com-header>
    <div class="contents">
      <div class="section">
        <img class="backgroundImgPhone" src="https://media.contentapi.ea.com/content/dam/apex-legends/common/defiance/apex-section-bg-defiance-season-return-user-xl.jpg.adapt.768w.jpg" alt="">
        <img class="backgroundImg" src="https://media.contentapi.ea.com/content/dam/apex-legends/common/defiance/apex-section-bg-defiance-season-return-user-xl.jpg.adapt.1456w.jpg" alt="">
        <div class="section-cloumn">
          <div>
            <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-medium-dark-logo.svg" alt="">
          </div>
          <div>
            <p>For PlayStation® 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch, and PC via Origin and Steam.</p>
          </div>
          <div class="btnBox">
            <div class="btn"><a href="javascript:;">PLAY FREE NOW*</a> </div>
            <div class="btn">
              <a href="javascript:;">
                WATCH THE TRAILER
                <IconPlayArrow style="fontSize: 24px; color: '#ffffff'; verticalAlign: middle; marginTop:-4px;" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
@import url('../src/assets/css/normalize.css');
@font-face {
  font-family: 'TTLakes-Regular';
  src: url('./assets/font/TTLakes-Regular/TTLakes-Regular.otf');
}
* {
  margin: 0;
  padding: 0;
}
.contents {
  margin-top: 70px;
}
.myheader {
  position: fixed;
  top: 0;
  z-index: 999;
}
.section {
  position: relative;
  text-align: center;
  align-content: center;
  .backgroundImg {
    width: 100%;
    @media only screen and (max-width: 1040px) {
      display: none;
    }
  }
  .backgroundImgPhone {
    display: none;
    width: 100%;
    @media only screen and (max-width: 1040px) {
      display: inline-block;
    }
  }
  .section-cloumn {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 8%;
    top: 17%;
    width: 40%;
    font-weight: 300;
    font-family: 'TTLakes-Regular';
    @media only screen and (max-width: 1040px) {
      display: none;
    }
    .btnBox {
      margin-top: 30px;
      margin-left: -30px;
      display: flex;
      justify-content: center;
      .btn {
        height: 61px;
        border: 3px solid #161616;
      }

      .btn:first-child {
        margin-right: 30px;
      }
      @media only screen and (max-width: 1356px) {
        & {
          flex-direction: column;
          align-items: center;
          & .btn:first-child {
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
      }
    }

    img {
      width: 320px;
    }
    p {
      text-align: left;
      color: #161616;
      font-size: 22px;
      padding-left: 20px;
    }
    a {
      width: 250px;
      height: 61px;
      line-height: 61px;
      color: #161616;
      font-size: 22px;
      padding: 14px 22px;
      text-align: center;
    }
    @media only screen and (max-width: 1440px) {
      top: 0;
    }
    @media only screen and (max-width: 1260px) {
      top: -40px;
    }
  }
}
</style>
