import { renderHook } from '@testing-library/react-hooks';
import { useOnClickOutside } from './UseOnClickOutside';
import { fireEvent } from '@testing-library/react';
import { MOCK_REF, MOCK_HANDLER, MOCK_EVENT } from './fixtures';

describe('UseOnClickOutside', () => {

  it('should call the handler when a mousedown or touchstart event is fired', () => {
    jest.spyOn(document, 'addEventListener').mockImplementation((type: string, listener: any) => listener(MOCK_EVENT));
    jest.spyOn(MOCK_REF.current, 'contains').mockImplementation(() => false);

    renderHook(() => {
      useOnClickOutside(MOCK_REF, MOCK_HANDLER, true)
    });

    fireEvent.mouseDown(document);

    expect(MOCK_HANDLER).toHaveBeenCalled();

    fireEvent.touchStart(document);

    expect(MOCK_HANDLER).toHaveBeenCalled();
  });
  
});
