'use client'

import type { DatasetListResponse } from '@dify/contracts/api/console/datasets/types.gen'
import type { InfiniteData } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

type StatsOverviewProps = {
  datasetList: InfiniteData<DatasetListResponse> | undefined
  total: number
}

const StatsOverview = ({ datasetList, total }: StatsOverviewProps) => {
  const { t } = useTranslation(['dataset', 'common'])

  const stats = useMemo(() => {
    const datasets = (datasetList?.pages ?? []).flatMap((page) => page.data)
    const totalDocs = datasets.reduce((sum, ds) => sum + (ds.document_count || 0), 0)
    const totalWords = datasets.reduce((sum, ds) => sum + (ds.word_count || 0), 0)
    const pipelineCount = datasets.filter((ds) => ds.runtime_mode === 'rag_pipeline').length
    const externalCount = datasets.filter((ds) => ds.provider === 'external').length

    return {
      totalDocs,
      totalWords,
      pipelineCount,
      externalCount,
    }
  }, [datasetList])

  const statItems = [
    {
      key: 'total',
      icon: 'i-ri-book-2-line',
      label: t(($) => $.knowledge, { ns: 'dataset' }),
      value: total,
      accent: 'bg-util-colors-blue-blue-100 text-util-colors-blue-blue-600',
      iconBg: 'bg-util-colors-blue-blue-50',
    },
    {
      key: 'documents',
      icon: 'i-ri-file-text-line',
      label: t(($) => $['datasetMenus.documents'], { ns: 'common' }),
      value: stats.totalDocs,
      accent: 'bg-util-colors-green-green-100 text-util-colors-green-green-600',
      iconBg: 'bg-util-colors-green-green-50',
    },
  ]

  if (stats.totalWords > 0) {
    statItems.push({
      key: 'words',
      icon: 'i-ri-font-size',
      label: t(($) => $.stats.totalWords, { ns: 'dataset' }),
      value: stats.totalWords,
      accent: 'bg-util-colors-indigo-indigo-100 text-util-colors-indigo-indigo-600',
      iconBg: 'bg-util-colors-indigo-indigo-50',
    })
  }

  if (stats.pipelineCount > 0) {
    statItems.push({
      key: 'pipeline',
      icon: 'i-custom-vender-pipeline-pipeline-line',
      label: t(($) => $['cornerLabel.pipeline'], { ns: 'dataset' }),
      value: stats.pipelineCount,
      accent: 'bg-util-colors-purple-purple-100 text-util-colors-purple-purple-600',
      iconBg: 'bg-util-colors-purple-purple-50',
    })
  }

  if (stats.externalCount > 0) {
    statItems.push({
      key: 'external',
      icon: 'i-custom-vender-solid-development-api-connection-mod',
      label: t(($) => $.externalTag, { ns: 'dataset' }),
      value: stats.externalCount,
      accent: 'bg-util-colors-orange-orange-100 text-util-colors-orange-orange-600',
      iconBg: 'bg-util-colors-orange-orange-50',
    })
  }

  if (total === 0) return null

  return (
    <div className="px-8 pb-0.5">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border-[0.5px] border-divider-subtle bg-background-default-dimmed px-4 py-3">
        {statItems.map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 transition-colors hover:bg-background-default-lighter"
          >
            <span
              aria-hidden
              className={`flex size-8 items-center justify-center rounded-lg ${item.iconBg}`}
            >
              <span className={`${item.icon} size-4 ${item.accent.split(' ')[1]}`} />
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="system-xs-regular text-text-tertiary">{item.label}</span>
              <span className="system-sm-semibold tabular-nums text-text-primary">
                {item.value.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsOverview