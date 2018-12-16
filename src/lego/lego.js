import React from 'react'

export default ({ pos = 'hor', color = 'red', size = 3, b }) => (
  <div className={`${b ? 'block' : 'inline'}`}>
    <div className={`lego ${pos} ${color} `}>
      {Array.apply(null, { length: size })
        .map(Number.call, Number)
        .map(item => (
          <div key={item} className={`lego-connect ${color}`} />
        ))}
    </div>
  </div>
)

export const BrickWithHook = function({
  pos = 'hor',
  color = 'red',
  size = 3,
  b
}) {
  const [hover, setHover] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${b ? 'block' : 'inline'}`}
    >
      <div className={`lego ${pos} ${hover ? 'purple' : color} `}>
        {Array.apply(null, { length: size })
          .map(Number.call, Number)
          .map(item => (
            <div
              key={item}
              className={`lego-connect ${hover ? 'purple' : color}`}
            />
          ))}
      </div>
    </div>
  )
}

export class BrickClass extends React.Component {
  state = { hover: false }

  toggleHover = () => this.setState(({ hover }) => ({ hover: !hover }))

  render() {
    const { pos, color, size, b } = this.props
    const { hover } = this.state
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className={`${b ? 'block' : 'inline'}`}
      >
        <div className={`lego ${pos} ${hover ? 'purple' : color} `}>
          {Array.apply(null, { length: size })
            .map(Number.call, Number)
            .map(item => (
              <div
                key={item}
                className={`lego-connect ${hover ? 'purple' : color}`}
              />
            ))}
        </div>
      </div>
    )
  }
}
