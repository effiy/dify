import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import FirstEmptyActionCard from '@/app/components/apps/first-empty-state/action-card'
import { STEP_BY_STEP_TOUR_TARGETS } from '@/app/components/step-by-step-tour/target-registry'

const PLACEHOLDER_CARD_VARIANTS = [
  { leftBar: 'bg-util-colors-blue-brand-blue-brand-500', opacity: 'opacity-30' },
  { leftBar: 'bg-util-colors-purple-purple-500', opacity: 'opacity-20' },
  { leftBar: 'bg-util-colors-green-green-500', opacity: 'opacity-25' },
  { leftBar: 'bg-util-colors-blue-brand-blue-brand-500', opacity: 'opacity-15' },
  { leftBar: 'bg-util-colors-orange-orange-500', opacity: 'opacity-20' },
  { leftBar: 'bg-util-colors-purple-purple-500', opacity: 'opacity-30' },
  { leftBar: 'bg-util-colors-green-green-500', opacity: 'opacity-15' },
  { leftBar: 'bg-util-colors-blue-brand-blue-brand-500', opacity: 'opacity-25' },
] as const

type EmptyCreateAction = {
  badge?: string
  href: string
  icon: ReactNode
  id: string
  title: string
  description: string
  target: string
}

type DatasetFirstEmptyStateProps = {
  canConnectExternalDataset: boolean
  canCreateDataset: boolean
}

function DatasetFirstEmptyState({
  canConnectExternalDataset,
  canCreateDataset,
}: DatasetFirstEmptyStateProps) {
  const { t } = useTranslation(['dataset'])

  const createActions: EmptyCreateAction[] = canCreateDataset
    ? [
        {
          badge: t(($) => $['firstEmpty.recommended'], { ns: 'dataset' }),
          href: '/datasets/create',
          icon: <span aria-hidden className="i-ri-add-line size-4" />,
          id: 'create',
          title: t(($) => $['firstEmpty.createTitle'], { ns: 'dataset' }),
          description: t(($) => $['firstEmpty.createDescription'], { ns: 'dataset' }),
          target: STEP_BY_STEP_TOUR_TARGETS.knowledgeEmptyCreate,
        },
        {
          href: '/datasets/create-from-pipeline',
          icon: <span aria-hidden className="i-custom-vender-pipeline-pipeline-line size-4" />,
          id: 'pipeline',
          title: t(($) => $['firstEmpty.pipelineTitle'], { ns: 'dataset' }),
          description: t(($) => $['firstEmpty.pipelineDescription'], { ns: 'dataset' }),
          target: STEP_BY_STEP_TOUR_TARGETS.knowledgeEmptyPipeline,
        },
      ]
    : []
  const connectAction: EmptyCreateAction | undefined = canConnectExternalDataset
    ? {
        href: '/datasets/connect',
        icon: (
          <span
            aria-hidden
            className="i-custom-vender-solid-development-api-connection-mod size-4"
          />
        ),
        id: 'connect',
        title: t(($) => $.connectDataset, { ns: 'dataset' }),
        description: t(($) => $['firstEmpty.connectDescription'], { ns: 'dataset' }),
        target: STEP_BY_STEP_TOUR_TARGETS.knowledgeEmptyConnect,
      }
    : undefined
  const hasActions = createActions.length > 0 || !!connectAction

  return (
    <div className="flex grow flex-col overflow-hidden">
      <div className="relative min-h-130 flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-8 top-2 grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] content-start gap-3">
          {PLACEHOLDER_CARD_VARIANTS.map((variant, index) => (
            <div
              key={`placeholder-${index}`}
              className={`relative overflow-hidden rounded-xl border-[0.5px] border-divider-subtle bg-background-default-lighter ${variant.opacity}`}
            >
              <div className={`absolute top-0 left-0 h-full w-1 ${variant.leftBar} rounded-l-xl`} />
              <div className="space-y-3 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 shrink-0 rounded-lg bg-background-default-dimmed" />
                  <div className="h-3 w-24 rounded-sm bg-background-default-dimmed" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded-sm bg-background-default-dimmed" />
                  <div className="h-2 w-3/4 rounded-sm bg-background-default-dimmed" />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <div className="h-2 w-12 rounded-sm bg-background-default-dimmed" />
                  <div className="h-2 w-16 rounded-sm bg-background-default-dimmed" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background-body/0 via-background-body/60 to-background-body" />
        <section
          className="absolute inset-0 flex items-center justify-center overflow-hidden p-2"
          aria-labelledby="datasets-first-empty-title"
        >
          <div className="flex w-full max-w-130 flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl border border-dashed border-divider-regular bg-components-card-bg p-1 backdrop-blur-md">
                <div className="flex size-full min-w-px items-center justify-center">
                  <span aria-hidden className="i-ri-book-2-line size-6 text-text-tertiary" />
                </div>
              </div>
              <h2
                id="datasets-first-empty-title"
                className="max-w-130 text-center system-sm-regular whitespace-pre-line text-text-tertiary"
              >
                {t(($) => $[hasActions ? 'firstEmpty.title' : 'firstEmpty.noCreatePermission'], {
                  ns: 'dataset',
                })}
              </h2>
            </div>
            {hasActions && (
              <div className="flex w-full flex-col gap-2 pb-8">
                {createActions.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {createActions.map((action) => (
                      <FirstEmptyActionCard
                        key={action.id}
                        badge={action.badge}
                        description={action.description}
                        href={action.href}
                        icon={action.icon}
                        stepByStepTourTarget={action.target}
                        title={action.title}
                        visualStyle="list"
                      />
                    ))}
                  </div>
                )}
                {createActions.length > 0 && connectAction && (
                  <div className="flex items-center gap-2 text-text-tertiary">
                    <div className="h-px min-w-0 flex-1 bg-linear-to-r from-background-body/0 to-divider-regular" />
                    <span className="system-xs-medium-uppercase uppercase">
                      {t(($) => $['firstEmpty.or'], { ns: 'dataset' })}
                    </span>
                    <div className="h-px min-w-0 flex-1 bg-linear-to-r from-divider-regular to-background-body/0" />
                  </div>
                )}
                {connectAction && (
                  <FirstEmptyActionCard
                    description={connectAction.description}
                    href={connectAction.href}
                    icon={connectAction.icon}
                    stepByStepTourTarget={connectAction.target}
                    title={connectAction.title}
                    visualStyle="list"
                  />
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default DatasetFirstEmptyState
