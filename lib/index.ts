interface JSONSchema {
}

interface DTDSchema {
}

interface ConvertOptions {
	format: 'json' | 'dtd' | 'xsd' | ''
}

export default (schemaText: string, options: ConvertOptions) : JSONSchema | DTDSchema => {
	return {}
}
