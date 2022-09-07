import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button1 = styled.button`
  position: relative;
  float: left;
  width: 100px;
  height: 80px;
  margin-right: 10px;
  border-radius: 5px;
  padding-top: 4px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: black 3px 3px 5px;
`;
const Div = styled.div`
  width: 332px;
  height: 295px;
  display: inline-block;
  margin: 20px;
`;
const Container = styled.div`
  outline: 5px solid black;
  position: relative;
  width: 660px;
  height: 660px;
  margin: auto;
  text-align: center;
  background-color: grey;
`;
const ControlContainer = styled.div`
  width: 240px;
  height: $padHeight * 3 + 32;
  display: inline-block;
  margin: 40px 20px 0 10px;
  vertical-align: top;
`;
const Power = styled.div`
  width: 23px;
  height: 19px;
  background: blue;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
`;
const Select = styled.div`
  margin: auto;
  border: 1px solid black;
  width: 50px;
  height: 20px;
  padding: 1px;
  background-color: black;
`;
export default function DrumMachine() {
  const [power, setPower] = useState(false);
  const [name, setName] = useState("heater");
  const [volume, setVolume] = useState(1);
  const [swap, setSwap] = useState(false);

  const audioClips = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  function Pad({ clip, volume }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, []);
    const handleKeyPress = (e) => {
      if (e.keyCode === clip.keyCode) {
        playSound();
      }
    };
    const playSound = () => {
      if (power === true) {
        const audioTag = document.getElementById(clip.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false), 200);
        audioTag.currentTime = 0;
        audioTag.volume = volume;
        console.log(clip.id);

        audioTag.play();
        setTimeout(() => setName(clip.id), 400);
      } else {
        return null;
      }
    };
    return (
      <Button1
        onClick={playSound}
        className={`${active && "btn-warning"} drum-pad`}
        id="drum-pad"
      >
        <audio src={clip.url} id={clip.keyTrigger} className="clip"></audio>
        {clip.keyTrigger}
      </Button1>
    );
  }
  const select = () => {
    if (power === false) {
      setPower(true);
    } else setPower(false);
    console.log("true");
  };
  const swapp = () => {
    if (swap === false) {
      setSwap(true);
    } else setSwap(false);
    console.log("true");
  };
  return (
    <div className="bg-info min-vh-100 text-white">
      <Container id="drum-machine">
        <h2>Drum machine</h2>
        <Div id="display">
          {swap
            ? bankTwo.map((clip) => (
                <Pad
                  className="drum-pad"
                  key={clip.id}
                  clip={clip}
                  volume={volume}
                />
              ))
            : audioClips.map((clip) => (
                <Pad key={clip.id} clip={clip} volume={volume} />
              ))}
        </Div>{" "}
        <ControlContainer>
          {" "}
          <Select onClick={select}>
            <Power style={{ float: power && "right" }} />
          </Select>{" "}
          <ControlContainer>
            {" "}
            <p id="display">{name}</p>
            <h4>volume</h4>
            <input
              className="w-50"
              type="range"
              step="0.01"
              value={volume}
              max="1"
              min="0"
              name=""
              id=""
              onChange={(e) => setVolume(e.target.value)}
            />
            <Select onClick={swapp}>
              <Power style={{ float: swap && "right" }} />
            </Select>
          </ControlContainer>{" "}
        </ControlContainer>
      </Container>
    </div>
  );
}
