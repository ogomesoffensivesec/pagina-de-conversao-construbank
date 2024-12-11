import { useState } from "react"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group"

export function ActionForm() {
  const [step, setStep] = useState(1)
  const form = useForm({
    defaultValues: {
      cnpj: "",
      razao_social: "",
      fullName: "",
      whatsapp_phone: "",
      email: "",
      estado: "",
      cidade: "",
      faixa_faturamento: "",
      tempo_fundacao: "",
      consentimento: false
    }
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // lógica de envio final dos dados
  }

  // Funções auxiliares para navegação entre etapas
  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">
        
        {/* Etapa 1: Informações da Empresa */}
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="cnpj"
              rules={{ required: "CNPJ é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ *</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o CNPJ" {...field} maxLength={18} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="razao_social"
              rules={{ required: "Razão Social é obrigatória" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Razão Social *</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a razão social" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              rules={{ required: "Nome é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button type="button" variant='ghost'    onClick={nextStep}>Próximo</Button>
            </div>
          </>
        )}

        {/* Etapa 2: Contato */}
        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="whatsapp_phone"
              rules={{ required: "Número de WhatsApp é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de telefone do WhatsApp *</FormLabel>
                  <FormControl>
                    <Input placeholder="(xx) xxxxx-xxxx" {...field} maxLength={15} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{ required: "E-mail é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" variant='ghost'  onClick={prevStep}>Voltar</Button>
              <Button type="button" variant='ghost' onClick={nextStep}>Próximo</Button>
            </div>
          </>
        )}

        {/* Etapa 3: Localização */}
        {step === 3 && (
          <>
            <FormField
              control={form.control}
              name="estado"
              rules={{ required: "Estado/Região é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado/Região da Empresa *</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o estado/região" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cidade"
              rules={{ required: "Cidade é obrigatória" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade *</FormLabel>
                  <FormControl>
                    <Input  placeholder="Digite a cidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" variant='ghost'  onClick={prevStep}>Voltar</Button>
              <Button type="button" variant='ghost' onClick={nextStep}>Próximo</Button>
            </div>
          </>
        )}

        {/* Etapa 4: Faixa de faturamento e tempo de fundação */}
        {step === 4 && (
          <>
            <FormField
              control={form.control}
              name="faixa_faturamento"
              rules={{ required: "Faixa de faturamento é obrigatória" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faixa de Faturamento *</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="menos de 360 mil">Menos de 360 mil por mês</SelectItem>
                      <SelectItem value="Entre 360 mil e 1 milhão por mês">Entre 360 mil e 1 milhão por mês</SelectItem>
                      <SelectItem value="Entre 1 milhão e 2,5 milhões por mês">Entre 1 milhão e 2,5 milhões por mês</SelectItem>
                      <SelectItem value="Entre 2,5 milhões e 5 milhões por mês">Entre 2,5 milhões e 5 milhões por mês</SelectItem>
                      <SelectItem value="Entre 5 milhões e 12 milhões por mês">Entre 5 milhões e 12 milhões por mês</SelectItem>
                      <SelectItem value="Mais que 12 milhões">Mais que 12 milhões</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tempo_fundacao"
              rules={{ required: "Tempo de Fundação é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempo de Fundação *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Menos que 1 ano" id="menos1ano" />
                        <label htmlFor="menos1ano">Menos que 1 ano</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Entre 1 a 2 anos" id="1a2anos" />
                        <label htmlFor="1a2anos">Entre 1 a 2 anos</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Mais que 2 anos" id="mais2anos" />
                        <label htmlFor="mais2anos">Mais que 2 anos</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" variant='ghost' onClick={prevStep}>Voltar</Button>
              <Button type="button" variant='ghost' onClick={nextStep}>Próximo</Button>
            </div>
          </>
        )}

        {/* Etapa 5: Consentimento e Envio */}
        {step === 5 && (
          <>
            <FormField
              control={form.control}
              name="consentimento"
              rules={{ required: "É necessário concordar com a Política de Privacidade." }}
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl className="m-0 p-0">
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal m-0 p-0">
                    Eu concordo com a Política de Privacidade.
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" variant='ghost'  onClick={prevStep}>Voltar</Button>
              <Button type="submit">Enviar</Button>
            </div>
          </>
        )}

      </form>
    </Form>
  )
}
