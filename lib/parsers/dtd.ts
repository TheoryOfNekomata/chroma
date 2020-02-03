enum ParserMode {
	NONE,
	OPEN_TAG,
	INSTRUCTION_START,
	INSTRUCTION_NAME,
}

interface DTDInstruction {

}

interface ParserState {
	lastCharacter: string
	instructions: DTDInstruction[]
}

export default (input: string) : DTDInstruction[] => {
	const { instructions, } = input
		.split('')
		.reduce(
			(state: ParserState, c) => {


				return {
					...state,
					lastCharacter: c,
				}
			},
			{
				lastCharacter: '',
				instructions: [],
			}
		)

	return instructions
}
