import React, { Component } from 'react';


class AudioVisualizer extends Component {
    constructor(props){
        super(props)

        this.createVisualization = this.createVisualization.bind(this)
    }

    componentDidMount(){
        this.createVisualization()
    }

    createVisualization(){
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = this.refs.analyzerCanvas;
        let ctx = canvas.getContext('2d');
        let audio = this.refs.audio;
        audio.crossOrigin = "anonymous";
        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);

        function renderFrame(){
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            console.log(freqData)
            ctx.fillStyle = '#9933ff';
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 2);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        };
        renderFrame()
    }

    render() {
        return (
            <div className="App">
                <div id="mp3_player">
                    <div id="audio_box">
                       
                        </div>

                        <canvas
                        width="250px"
                        height="130px"
                            ref="analyzerCanvas"
                            id="analyzer"
                            >
                        </canvas>

                        <audio
                        style = {{width: "250px"}}
                            ref="audio"
                            autoPlay={false}
                            controls={true}
                            src={this.props.audio}
                        >
                        </audio>

                        </div>
                    </div>
                );
            }
        }

        export default AudioVisualizer 