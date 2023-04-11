// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useDotLottieButton } from 'library/Hooks/useDotLottieButton';
import { useTranslation } from 'react-i18next';
import { ItemInnerWrapper, ItemWrapper, ItemsWrapper } from './Wrappers';

export const Syncing = () => {
  const { t } = useTranslation('tips');
  const { icon } = useDotLottieButton('refresh', { autoLoop: true });

  return (
    <ItemsWrapper
      initial="show"
      animate={undefined}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
        },
      }}
    >
      <ItemWrapper>
        <ItemInnerWrapper inactive>
          <section
            style={{
              marginRight: '0.5rem',
              width: '1.5rem',
              height: '1.5rem',
            }}
          >
            {icon}
          </section>
          <section>
            <div className="desc">
              <h4>{t('module.oneMoment')}...</h4>
            </div>
          </section>
        </ItemInnerWrapper>
      </ItemWrapper>
    </ItemsWrapper>
  );
};
