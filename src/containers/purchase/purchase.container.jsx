import React from 'react'

import { PurchaseWidgets } from '../../components/widgets/purchase-widget/purchase-widget.component'

export const PurchaseContainer = () => {
    const onBuyIPv4Shared = React.useCallback(() => {
        console.log('onBuyIPv4Shared')
    }, [])
    const onBuyIPv4 = React.useCallback(() => {
        console.log('onBuyIPv4')
    }, [])
    const onBuyIPv6 = React.useCallback(() => {
        console.log('onBuyIPv6')
    }, [])

    return (
        <PurchaseWidgets onBuyIPv4Shared={onBuyIPv4Shared} onBuyIPv4={onBuyIPv4} onBuyIPv6={onBuyIPv6} />
    )
}