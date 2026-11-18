# LyNx Agent Control (demo)

Static demo of **LyNx Agent Control**, a dashboard for monitoring and controlling a fleet of automated AI agents (content campaigns, affiliate videos, trading, DEX scanning, research, internship digests and a bug-fixing worker).

**Live demo: https://makhdanramadhan-ui.github.io/lynx-agent-control-demo/**

> All data in this demo is mock data generated in the browser. There is no backend, no login, no network API and no real account, balance, host or credential behind it. Controls (restart, close position, chat, etc.) only simulate a response.

## Features

- Overview with system gauges (CPU, RAM, disk), agent constellation, daily schedule and activity feed
- Per-agent pages with status, logs, controls and a chat bubble
- Trading views: spot and futures positions, PnL, SL/TP markers on candlestick charts, DEX positions and watchlist
- Campaign and affiliate media proof viewer with audit scores
- Researcher daily report and "why this pick / why rejected" selection reasons
- Bug tracker with worker job queue and fix history
- Internship digest runs
- Light and dark themes, responsive layout (mobile to desktop), hash routing

## Stack

React, TypeScript and Vite. This repository only holds the built static output.
