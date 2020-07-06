import { renderHook, act } from "@testing-library/react-hooks";
import * as hook from "../UseOnClickOutside/UseOnClickOutside";
import { MOCK_REF } from "../UseOnClickOutside/fixtures";
import { useSelectBehavior } from "./UseSelectBehavior";
import { 
  MOCK_INITIAL_STATE, MOCK_CLICK_EVENT, MOCK_INPUT_EVENT,
  MOCK_INPUT_VALUE, MOCK_SELECT_EVENT, MOCK_SELECT_VALUE,
  MOCK_CLEAR_EVENT, MOCK_DEFAULT_VALUE, MOCK_DEFAULT_IS_OPEN
} from "./fixtures";

describe('UseSelectBehavior', () => {

  it('should have an initialState where isOpen is false and the inputValue is an empty string', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    expect(result.current.state).toEqual(MOCK_INITIAL_STATE);
  });

  it('should set isOpen from true to false when handleClose is called', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    act(() => result.current.handleClick(MOCK_CLICK_EVENT));

    expect(result.current.state.isOpen).toBeTruthy();

    act(() => result.current.handleClose());

    expect(result.current.state.isOpen).toBeFalsy();
  });

  it('should toggle isOpen to true when handleClick is called', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    act(() => result.current.handleClick(MOCK_CLICK_EVENT));

    expect(result.current.state.isOpen).toBeTruthy();
  });

  it('should set the inputValue when handleInput is called', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    act(() => result.current.handleInput(MOCK_INPUT_EVENT));

    expect(result.current.state.inputValue).toEqual(MOCK_INPUT_VALUE);
  });

  it('should set the inputValue and set isOpen to false when handleSelect is called', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    act(() => result.current.handleSelect(MOCK_SELECT_EVENT));

    expect(result.current.state.inputValue).toEqual(MOCK_SELECT_VALUE);
    expect(result.current.state.isOpen).toBeFalsy();
  });

  it('should clear the inputValue when handleClear is called', () => {
    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    act(() => result.current.handleClear(MOCK_CLEAR_EVENT));

    expect(result.current.state.inputValue).toEqual(MOCK_DEFAULT_VALUE);
  });

  it('should call the useOnClickOutside hook a reference, a handleClose function and the default isOpen state', () => {
    const useOnClickOutsideSpy = spyOn(hook, 'useOnClickOutside');

    const { result } = renderHook(() => useSelectBehavior(MOCK_REF));

    expect(useOnClickOutsideSpy).toHaveBeenCalledWith(MOCK_REF, result.current.handleClose, MOCK_DEFAULT_IS_OPEN);
  });

});