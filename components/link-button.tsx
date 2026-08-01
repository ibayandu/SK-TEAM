import Link from 'next/link'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LinkButtonProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>

export function LinkButton({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
