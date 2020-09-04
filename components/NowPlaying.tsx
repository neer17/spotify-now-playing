import React from 'react';
import ReadmeImg from './ReadmeImg';
import { barGen } from '../utils/bar';

export interface Props {
  cover?: string;
  track: string;
  artist: string;
}

export const Player: React.FC<Props> = ({ cover, track, artist }) => {
  const barCount = 84;
  return (
    <ReadmeImg width={480} height={133}>
      <style>
        {`
          .main {
            display: flex;
          }

          .container {
            border-radius: 5px;
            padding: 10px 10px 10px 0px;
          }

          .content {
            width: 71%;
          }

          .song {
            color: #666;
            overflow: hidden;
            margin-top: 3px;
            font-size: 24px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .artist {
            color: #b3b3b3;
            font-size: 20px;
            margin-top: 4px;
            text-align: center;
            margin-bottom: 5px;
          }

          div {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
              sans-serif, Apple Color Emoji, Segoe UI Emoji;
          }

          img:not([src]) {
            content: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
            border-radius: 6px;
            background: #fff;
            border: 1px solid #e1e4e8;
          }

          #cover {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.05);
          }

          #cover:not([src]) {
            box-shadow: none;
          }

          #bars {
            width: 40px;
            height: 30px;
            bottom: 23px;
            position: absolute;
            margin: -20px 0 0 0px;
          }

          .bar {
            width: 3px;
            bottom: 1px;
            height: 3px;
            position: absolute;
            background: #1db954cc;
            animation: sound 0ms -800ms linear infinite alternate;
          }

          ${barGen(barCount)}

          @keyframes sound {
            0% {
              height: 3px;
              opacity: 0.35;
            }

            100% {
              height: 15px;
              opacity: 0.95;
            }
          }
        `}
      </style>
      <div className="main">
        <img id="cover" src={cover} width="100" height="100" alt="cover" />

        <div className="content">
          <div className="song">{`${track ?? ''} `.trim()}</div>
          <div className="artist">{artist || 'Nothing playing...'}</div>
          <div id="bars">
            {artist &&
              [...Array(barCount)].map((_, i) => (
                <div key={i} className="bar"></div>
              ))}
          </div>
        </div>
      </div>
    </ReadmeImg>
  );
};
