#!/bin/sh
clear
mundo=$(curl -s https://covid19.mathdro.id/api)
brasil=$(curl -s https://covid19.mathdro.id/api/countries/BR)
spacer="------------------------------"

echo $spacer
echo "Mundo:"
echo "Cofirmados: "$(echo $mundo | jq ".confirmed.value")
echo "Mortes: "$(echo $mundo | jq ".deaths.value")
echo "Recuperados: "$(echo $mundo | jq ".recovered.value")
echo $spacer
echo "Brasil:"
echo "Cofirmados: "$(echo $brasil | jq ".confirmed.value")
echo "Mortes: "$(echo $brasil | jq ".deaths.value")
echo "Recuperados: "$(echo $brasil | jq ".recovered.value")
