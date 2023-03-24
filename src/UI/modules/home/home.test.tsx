import { h } from 'preact'
import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/preact'
import { HomePageModule } from '.'
import { useMockDataBaseForBaseLayer } from '@/database-container/useMockDataBaseForBaseLayer'

afterEach(() => {
  cleanup()
})
setTimeout(() => {
  return 30000
})
describe('Render home page', () => {
  test('double click open/close - connector should show/hide', async () => {
    renderHook(() => useMockDataBaseForBaseLayer())
    render(<HomePageModule />)
    // Open connector
    fireEvent.click(screen.getByTestId('button_open_connector'))
    await screen.findByTestId('shadowRoot')
    expect(screen.queryByTestId('shadowRoot')).toBeInTheDocument()

    //Close connector
    fireEvent.click(screen.getByTestId('button_open_connector'))
    await screen.findByText('Open connector')
    expect(screen.queryByTestId('shadowRoot')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('button_open_connector'))
    await screen.findByTestId('shadowRoot')
    expect(screen.queryByTestId('shadowRoot')).toBeInTheDocument()
  })
  test('click Open button - button text: Close connector', async () => {
    render(<HomePageModule />)
    fireEvent.click(screen.getByTestId('button_open_connector'))
    await screen.findByText('Close connector')
    expect(screen.getByText('Close connector')).toBeInTheDocument()
  })
})
