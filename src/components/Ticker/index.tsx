import Clock from 'react-live-clock'
import React from 'react'
import styled from '../../styled'
import Ticker from 'react-ticker'

const TickerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, max-content);
  gap: 0 2rem;
  grid-template-rows: 1fr;
  white-space: nowrap;
  will-change: transform;
  margin-right: 2rem;
  padding-top: 1rem;
`

const TickerItem = styled.div`
  &:after {
    margin-left: 2rem;
    content: "||";
  }
  color: white;
`

const CODES: { key: string; value?: string }[] = [
  {
    key: `current`,
  },
  {
    key: `bangkok`,
    value: "ASIA/Bangkok",
  },

  {
    key: `tokyo`,
    value: "ASIA/Tokyo",
  },
  {
    key: `los angeles`,
    value: "US/Pacific",
  },
  {
    key: `cartagena`,
    value: "America/Bogota"
  },
  {
    key: `new york`,
    value: "US/Eastern",
  },
  {
    key: `london`,
    value: "Europe/London",
  },
  {
    key: `milan`,
    value: "Europe/Rome"
  },
  {
    key: `paris`,
    value: "Europe/Paris",
  },
  {
    key: `dubai`,
    value: "ASIA/Dubai",
  }
]

const TickerComponent = () => (
  <Ticker>
    {() => (
      <TickerWrapper>
        {CODES.map(code => (
          <TickerItem key={`ticker_item_${code.key}`}>
            {code.key.toUpperCase()}:{" "}
            <Clock format={"HH:mm"} ticking={true} timezone={code.value} />
          </TickerItem>
        ))}
      </TickerWrapper>
    )}
  </Ticker>
)

export default TickerComponent
