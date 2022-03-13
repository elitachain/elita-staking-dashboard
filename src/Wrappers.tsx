// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SIDE_MENU_INTERFACE_WIDTH, INTERFACE_MINIMUM_HEIGHT, INTERFACE_MINIMUM_WIDTH, INTERFACE_MAXIMUM_WIDTH } from './constants';

// Highest level wrapper for Entry component
export const EntryWrapper = styled.div`
    width: 100%;
    min-width: ${INTERFACE_MINIMUM_WIDTH}px;
    background: #fbfbfb;
    background: linear-gradient(-225deg, rgba(251,251,251,1) 0%, rgba(229,229,229,1) 100%);
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;

    font-size: 10px;
`;

// Body interface wrapper
export const BodyInterfaceWrapper = styled.div`
    display: flex;
    position: relative;
    flex: 1;
    min-height: ${INTERFACE_MINIMUM_HEIGHT}px;
`;

// Side interface wrapper
export const SideInterfaceWrapper = styled.div`
    height: 100%;
    min-width: ${SIDE_MENU_INTERFACE_WIDTH}px;
    display: flex;
    flex-flow: column nowrap;
`;


// Scroll wrapper
export const PageScrollWrapper = styled.div`
    flex: 1;
    overflow: auto;
`;

// Main interface wrapper
export const MainInterfaceWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
    max-width: ${INTERFACE_MAXIMUM_WIDTH}px;

    h1.title {
        font-size: 1.65rem;
        font-variation-settings: 'wght' 420;
        margin-bottom: 0.2rem;
    }
`;

// Page wrapper
export const PageWrapper = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: 8vh 0 2rem;
    margin: 0 2.6rem;
    overflow: hidden;
    overflow-y: scroll;
    flex-grow: 1;
`;

// Page Row wrapper
export const PageRowWrapper = styled.div<any>`
    margin: ${props => props.noVerticalSpacer === true ? `0` : `1rem 0`};
    display: flex;
    flex-shrink: 0;
    flex-flow: row nowrap;
    width: 100%;
    box-sizing: border-box;
    overflow-x: scroll;

    * {
        box-sizing: border-box;
    }

    /* kill heading padding, already applied to wrapper */
    h1, h2, h3, h4 {
        margin-top: 0;
    }
`;