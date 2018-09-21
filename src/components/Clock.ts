import React from 'react'

export interface IClockState {
  now: Date,
}

export interface IClockProps {
  precision?: number,
  children: (now: Date) => JSX.Element
}
export class Clock extends React.Component<IClockProps, IClockState> {
  private interval: number = 0

  public state = {
    now: new Date(),
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(),
      })
    }, this.props.precision || 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  public render() {
    return this.props.children(this.state.now)
  }
}